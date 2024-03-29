import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                  "Active Barre Studio is Taree's first boutique studio specialising in Barre attack. Classes taught by Wendie Dawson offer a unique fusion of Barre, Pilates and Reformer.  Active Barre Studio is located on Victoria street in the Heart of Taree",
              },
              {
                name: 'keywords',
                content:
                  'active barre, Taree fitness, Dance studio, fitness class, Barre Attack, Pilates, Reformer, Barre, Barre class, Barre studio, Barre',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
