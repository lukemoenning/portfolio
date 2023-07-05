/**
 * Resume component
 */

import React from 'react'
import styled from 'styled-components'
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  HeaderTitle,
  HeaderDescription,
  BodyHeaderNarrow, 
  BodyContentWrapper, 
  BodyContentNarrow
} from '@/app/libs/common-components'
import { theme } from '@/app/libs/theme'


const Pdf = styled.iframe`
  margin: 25px 0 25px 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 800px;
`

const NewTabPDF = styled.a`
  text-decoration: none;
  color: ${theme.colors.lightBlue};
`

function Resume() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Resume.</HeaderTitle>
          <HeaderDescription>
            An official copy of my resume. <NewTabPDF href={'/Moenning_Luke_Resume.pdf'} target='blank'>
              Open in a new tab.
            </NewTabPDF>
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <Pdf src={'/Moenning_Luke_Resume.pdf'} />
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Resume