import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexboxOutermostContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export default function HomePage() {
    return (
        <FlexboxOutermostContainer>
            <LinksContainer>
                <Link
                    to='/algorithmCompileExample'
                >
                    Algorithm Compilation Example!
                </Link>
                <Link
                    to='/developmentEnvironmentExample'
                >
                    Development Environment Example!
                </Link>
                <Link
                    to='/modifyingDOMExample'
                >
                    Modifying DOM Example!
                </Link>
            </LinksContainer>
        </FlexboxOutermostContainer>
    )
}