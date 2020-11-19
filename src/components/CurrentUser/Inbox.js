import React from 'react';

//needs to get added to NavBar or should this be notification in the top bar, bell Icon?

const Inbox = () => {

  return (
    <div>
      <h1>Requests</h1>
      <div>
        <h2>Pal</h2>
        <p>sent</p>
        <p>pending approval</p>
      </div>
      <div>
        <h2>Shopping</h2>
        <p>sent</p>
        <p>Should include whose list this was sent to</p>
        <p>pending approval</p>
      </div>
      <div>
        <h2>Merge</h2>
        <p>sent</p>
        <p>pending approval</p>
      </div>
    </div>

  )

}

export default Inbox