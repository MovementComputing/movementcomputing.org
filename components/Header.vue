<template>
  <header id="site-header" class="site-header">
    <div id="title-container" class="title-container">
      <div id="site-title" class="site-title">
        <nuxt-link to="/">
          <span class="screen-reader-text">Movement &amp; Computing</span>
          <img class="logo" src="/images/moco_logo1.png" alt="Movement &amp; Computing" scale="0">
        </nuxt-link>
      </div>
      <p class="tagline">Movement + Computing Community</p>
    </div>
    <button id="toggle-navigation" class="toggle-navigation" name="toggle-navigation" aria-expanded="false">
      <span class="screen-reader-text">open menu</span>
      <i class="fa fa-bars" title="primary menu icon" aria-hidden="true"></i>
    </button>
    <div id="menu-primary-container" class="menu-primary-container" style="display: block;">
      <div id="menu-primary" class="menu-container menu-primary" role="navigation">
        <nav class="menu">
          <ul id="menu-primary-items" class="menu-primary-items">
            <nuxt-link
              to="/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-18"
            >
              <a>News</a>
            </nuxt-link>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-174">
              <a href="http://moco17.movementcomputing.org/">MOCO’17</a>
            </li>
            <nuxt-link
              to="/past-conferences/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"
            >
              <a>Past Conferences</a>
            </nuxt-link>
            <nuxt-link
              to="/proceedings/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"
            >
              <a>Proceedings</a>
            </nuxt-link>
            <nuxt-link
              to="/discussion-group/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46"
            >
              <a>Discussion Group</a>
            </nuxt-link>
            <nuxt-link
              to="/about/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
            >
              <a>About</a>
            </nuxt-link>
            <nuxt-link
              to="/contact/"
              tag="li"
              exact
              active-class="current-menu-item"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"
            >
              <a>Contact</a>
            </nuxt-link>
          </ul>
        </nav>
      </div>
      <ul class="social-media-icons">
        <li>
          <a class="twitter" target="_blank" href="https://twitter.com/MOCO_Symposium">
            <i class="fa fa-twitter-square" title="twitter"></i>
            <span class="screen-reader-text">twitter</span>
          </a>
        </li>
        <li>
          <a class="email" target="_blank" href="mailto:moco-share@sfu.ca">
            <i class="fa fa-envelope" title="email"></i>
            <span class="screen-reader-text">email</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
