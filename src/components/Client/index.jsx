import React from 'react';
import Email from 'components/Email';
import Phone from 'components/Phone';
import Avatar from 'components/Avatar';


const Client = (props) => {
  const { firstName, lastName, phone, avatar, job } = props.data;

  return (
    <li>
      <div
        className="card mb-5 mt-5"
        style={{ width: 35 + "rem" }}
      >
        <Avatar avatar={avatar} />
        <div className="card-body">
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">{job}</p>
          <div className="d-flex justify-content-around">
            <Phone phone={phone} />
            <Email firstName={firstName} lastName={lastName} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Client;