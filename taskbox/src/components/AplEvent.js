import React from 'react';

export default function AplEvent({ aplevent: { id, title, state, status }, onArchiveTask, onPinTask }) {
  return (
    <div className={`event ${status}`}>
        <img src="https://library.austintexas.gov/library/580x355web.png" alt="Kids Block Party" loading="lazy" typeof="Image" width="581" height="356" />
    <div className="apl-event">
	   <div className="field-title">Kids Block Party 2022</div><div className="apl-event-summary"><p><span><span><span>The Kids Block Party is back! <strong>Join us on Saturday, May 14</strong> for family-friendly activities for kids 0 – tweens!</span></span></span></p>
        <p><span><span><span>Learn more about the event details in the&nbsp;<a href="https://library.austintexas.gov/press-release/kids-block-party-back-7699962">Kids Block Party Agenda</a>.</span></span></span></p></div>
	   <div className="field-event-time"><i className="material-icons-outlined">schedule</i><div>Saturday, May 14, 2022 - 9:00 AM to 12:30 PM </div></div>
	   <div className="field-event-loc"><i className="material-icons-outlined">place</i><div>Central Library, 710 W. César Chávez St.</div></div> 
       <div className="apl-free">Free and open to the public | Gratis y abierto al público</div>
       <div className="apl-event-tags">Tags: <a className="usa-button usa-button-outline" href="/events?f[0]=audience_%3A32">Children</a> <a className="usa-button usa-button-outline" href="/events/youth-programs-workshops">Youth Programs &amp; Workshops</a></div>
    </div>
</div>
  );
}

