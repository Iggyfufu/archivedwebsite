import React from 'react';
import { Icon } from 'semantic-ui-react';

const Sidebar = () => (
  <div>
    <div>
      <img className="profile" src="/profile.jpg" alt="profile" />
      <div>
        <Icon name="github alternate" size="big" />
        <Icon name="linkedin square" size="big" />
        <Icon name="instagram" size="big" />
      </div>
    </div>
    <h3>Contact</h3>
    <div>
      <div>
        <Icon name="map marker" /> Brooklyn, New York
      </div>
      <div>
        <Icon name="mail" /> <a href="mailto:kennethzhu07@gmail.com">kennethzhu07@gmail.com</a>
      </div>
    </div>
  </div>
);

export default Sidebar;

