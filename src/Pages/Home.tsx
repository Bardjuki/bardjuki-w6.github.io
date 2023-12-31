// import { Grid, GridItem, Show } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import { useState } from "react";
// import { Genre } from "./hooks/useGenres";
// import PlatformSelector from "./components/PlatformSelector";
// import { Platform } from "./hooks/useGames";

// function App() {
//   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
//   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
//     null
//   );
//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "aside main"`,
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside">
//           <GenreList
//             selectedGenre={selectedGenre}
//             onSelectGenre={(genre) => setSelectedGenre(genre)}
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <PlatformSelector
//           selectedPlatform={selectedPlatform}
//           onSelectPlatform={(platform) => setSelectedPlatform(platform)}
//         />
//         <GameGrid
//           selectedPlatform={selectedPlatform}
//           selectedGenre={selectedGenre}
//         />
//       </GridItem>
//     </Grid>
//   );
//

// export default App;

// -----GameQuery

import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components-home/NavBar";
import GameGrid from "../components-home/GameGrid";
import GenreList from "../components-home/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components-home/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components-home/SortSelector";
import GameHeading from "../components-home/GameHeading";

export interface GameQuery {
  searchText: any;
  sortOrder: any;
  genre: Genre | null;
  platform: Platform | null;
}
function Home() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default Home;
