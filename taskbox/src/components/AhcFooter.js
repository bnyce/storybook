import React from 'react';

export default function AhcFooter({ ahcfooter: { id, title, body, state }, onArchiveTask, onPinTask }) {
  return (
<div class="region region-footer" id="footer">
<div id="block-panels-mini-footer-container">
<div class="panel-display panel-2col clearfix" id="mini-panel-footer_container">
<div class="panel-panel panel-col-first">
<div class="inside">
<div class="panel-pane" id="more-than-books">
<h2 class="pane-title">Discover Your Story</h2>
<div class="menu-name-menu-apl-footer-2014" id="links-container">
<ul class="menu" id="footer-links1">
         <li><a href="http://austin.countingopinions.com">How are we doing?</a></li>
	<li><a href="/ahc/contact-austin-history-center">Contact Us</a></li>
	<li><a href="/ahc/everything-austin">Helpful Links</a></li>
</ul>
<ul id="footer-links">
	<li><a href="/">Austin Public Library</a></li>
	<li><a href="/ahc">Austin History Center</a></li>
	<li><a href="/recycled-reads">Recycled Reads Bookstore</a></li>
</ul>
</div>
</div>
<div class="panel-pane" id="connect-with-us">
<div class="menu-name-menu-apl-footer-2014">
<ul class="menu">
 <li class="fb"><a href="http://www.facebook.com/AustinHistoryCenter"><img width="32" height="32" src="https://library.austintexas.gov/library/facebook512_0.png" alt="Facebook logo"/></a></li>
<li class="ig"><a href="https://www.instagram.com/austinhistorycenter/"><img alt="Instagram logo" src="https://library.austintexas.gov/library/misc/instagram-logo-white.png" width="32" height="32"/></a></li>
<li class="sc"><a href="https://soundcloud.com/austinhistorycenter"><img width="32" height="32" src="https://library.austintexas.gov/library/sc_square_480.png" alt="SoundCloud logo"/></a></li>
<li class="yt"><a href="https://www.youtube.com/channel/UCmKoOUpsn4H0mUcIGAqFtCQ"><img width="32" height="32" src="https://library.austintexas.gov/library/youtube512.png" alt="Youtube logo"/></a></li>
</ul><a href="/social" id="apl-connect">Connect with us</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    );
}