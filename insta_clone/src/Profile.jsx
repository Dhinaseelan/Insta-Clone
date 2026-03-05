import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [pro, setPro] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingFollowers, setLoadingFollowers] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingProfile(true);
    axios
      .get("http://localhost:3001/profile")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setPro(data || null);
      })
      .catch(() => setError("Failed to load profile"))
      .finally(() => setLoadingProfile(false));

    setLoadingFollowers(true);
    axios
      .get("http://localhost:3001/followers")
      .then((res) => setFollowers(res.data || []))
      .catch(() => setFollowers([]))
      .finally(() => setLoadingFollowers(false));
  }, []);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setPro((prev) => ({ ...(prev || {}), [name]: value }));
  }

  async function handleUpdate() {
    if (!pro || !pro.id) return;
    setSaving(true);
    setError(null);
    try {
      await axios.put(`http://localhost:3001/profile/${pro.id}`, pro);
      alert("Profile updated");
    } catch {
      setError("Update failed");
    } finally {
      setSaving(false);
    }
  }

  async function Unfollow(id) {
    try {
      await axios.delete(`http://localhost:3001/followers/${id}`);
      setFollowers((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  const initials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div className="profile-root">
      {loadingProfile ? (
        <div className="loading">Loading Profile...</div>
      ) : pro ? (
        <div className="profile-card">
          <div className="profile-top">
            {/* Only render image if profilePic is a non-empty string */}
            {pro.profilePic ? (
              <img
                src={pro.profilePic}
                alt={pro.username || "profile"}
                className="profile-avatar"
              />
            ) : (
              <div className="profile-avatar fallback">
                {initials(pro.username)}
              </div>
            )}

            <div className="profile-meta">
              <h2 className="profile-username">{pro.username}</h2>
              <div className="profile-stats">
                <div>
                  <strong>{pro.posts || 0}</strong>
                  <span> posts</span>
                </div>
                <div>
                  <strong>{followers.length}</strong>
                  <span> followers</span>
                </div>
                <div>
                  <strong>{pro.following || 0}</strong>
                  <span> following</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-form">
            <label className="form-label">
              Username
              <input
                name="username"
                value={pro.username || ""}
                onChange={handleOnChange}
                className="form-input"
                type="text"
              />
            </label>

            <label className="form-label">
              Profile picture URL
              <input
                name="profilePic"
                value={pro.profilePic || ""}
                onChange={handleOnChange}
                className="form-input"
                type="text"
                placeholder="Paste image URL or leave empty"
              />
            </label>

            <div className="form-actions">
              <button
                className="btn btn-primary"
                onClick={handleUpdate}
                disabled={saving}
                aria-disabled={saving}
              >
                {saving ? "Saving..." : "Update"}
              </button>
              {error && (
                <div className="form-error" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">No profile found</div>
      )}

      <hr className="divider" />

      <section className="followers-section">
        <div className="followers-header">
          <h3>Followers</h3>
          {loadingFollowers && <small className="muted">Loading…</small>}
        </div>

        {followers.length > 0 ? (
          <div className="followers-list">
            {followers.map((f) => (
              <div className="follower-item" key={f.id}>
                <div className="follower-left">
                  {/* Removed follower image; show initials fallback only */}
                  <div className="follower-avatar fallback-small">
                    {initials(f.username)}
                  </div>
                  <div className="follower-name">{f.username}</div>
                </div>
                <div className="follower-actions">
                  <button
                    className="btn btn-outline"
                    onClick={() => Unfollow(f.id)}
                    aria-label={`Unfollow ${f.username}`}
                  >
                    Unfollow
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-followers">No followers yet</div>
        )}
      </section>
    </div>
  );
};

export default Profile;