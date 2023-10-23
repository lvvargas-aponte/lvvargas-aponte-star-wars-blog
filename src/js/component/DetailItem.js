import React from 'react';

const DetailItem = ({ label, value }) => (
    <div className="col-2 fs-3">
        <h3>{label}</h3>
        <p>{value}</p>
    </div>
);

export default DetailItem;