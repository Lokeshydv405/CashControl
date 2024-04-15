import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState(() => {
    // Retrieve profile data from localStorage or use default values
    const savedProfile = localStorage.getItem('profile');
    return savedProfile ? JSON.parse(savedProfile) : {
      name: "John Smith",
      email: "example@example.com",
      phone: "(097) 234-5678",
      mobile: "(098) 765-4321",
      address: "Bay Area, San Francisco, CA",
      occupation: "Full Stack Developer",
      gender: "Male",
      balance: "$5000"
    };
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Save profile data to localStorage when profile state changes
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    setIsSaved(false); // Mark changes as unsaved when user modifies input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement saving the profile changes, like sending them to a server
    setIsSaved(true);
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{profile.name}</h5>
                <p className="text-muted mb-1">Gender: {profile.gender}</p>
                <p className="text-muted mb-1">{profile.occupation}</p>
                <p className="text-muted mb-1">{profile.address}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Full Name</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="name" name="name" value={profile.name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <input type="email" className="form-control" id="email" name="email" value={profile.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="mobile" className="col-sm-3 col-form-label">Mobile</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="mobile" name="mobile" value={profile.mobile} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="address" name="address" value={profile.address} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="occupation" className="col-sm-3 col-form-label">Occupation</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="occupation" name="occupation" value={profile.occupation} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-9">
                      <select className="form-control" id="gender" name="gender" value={profile.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
                {isSaved && <p>Changes saved!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
