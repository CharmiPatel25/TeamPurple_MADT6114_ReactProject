import React from 'react';
import Router from 'next/router';

import { mapGlobals } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import Page from 'components/views/page'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class DynamicPage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const pageResponse = await Request.getObject(query.pagename);
    const page = pageResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, page };
  }
  constructor(props){
    super(props);
    this.state = {
        header: props.globals.header,
        contact_form: props.globals.contact_form,
        nav: props.globals.nav,
        social: props.globals.social,
        contactInfo: props.globals.contact_info.metadata,
        footer: props.globals.footer,
        page: props.page
    }
  }