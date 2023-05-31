import React from 'react';
import styles from '../../styles/Components.module.css';
import fonts from '../../styles/Fonts.module.css';

const UserTitle = () => {
  return (
    <section className="flex items-center justify-center min-h-[50px]">
      <div
        className={`relative text-5xl group ${styles.content_title} ${fonts.font_lilita}`}
      >
        <h2 className="absolute translate-x-[-50%] translate-y-[-50%] text-transparent">
          SINTI
        </h2>
        <h2 className="absolute translate-x-[-50%] translate-y-[-50%] text-[#911dde] group-hover:text-white transition duration-700">
          SAFI SINTI
        </h2>
      </div>
    </section>
  );
}

export default UserTitle;