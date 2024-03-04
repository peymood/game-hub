import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }}>
      <GridItem area='nav' bg='blue' >
        Nav
      </GridItem>

      <Show above='' >
       <GridItem area='aside' bg='brown' >
         Aside
       </GridItem>
      </Show>
      
      <GridItem area='main' bg='pink' >
        Main
      </GridItem>

    </Grid>
  )
}

export default App
