import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: clamp(350px, 100%, 100%);
`
Container.displayName = 'Container'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
Title.displayName = 'Title'

export const FiltersPanel = styled.div`
    padding: 5px 
`
FiltersPanel.displayName = 'FiltersPanel'