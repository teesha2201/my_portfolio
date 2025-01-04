import React from 'react';

const ComposeEmail = ({ email }) => {
  const handleComposeEmail = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <button onClick={handleComposeEmail}>Compose Email</button>
  );
};

export default ComposeEmail;
