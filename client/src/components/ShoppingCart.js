import React from 'react';
import styled from 'styled-components';

const CartWrapper = styled.div`
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    
    border-left: 4px;
    @media (min-with: 576px{
        width: 20rem;
    }  
`;