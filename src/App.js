import React from "react";
import Weather from "./components/Weather/Weather";
import { useGeoLocation } from "./hooks/useGeoLocation";
import { Wrapper } from "./components/Weather/styled";
import { SkeletonWrapper, SkeletonTitle, SkeletonSubtitle, SkeletonText, SkeletonIcon } from './components/skeleton/skeleton';

function App() {

  const [location, ready, error] = useGeoLocation();

  return (
    <>
      {!error.status ? 
        !ready?
          <Wrapper>
            <SkeletonWrapper width='60%'>
              <SkeletonTitle />
              <SkeletonSubtitle />
              <SkeletonText />
              <SkeletonText />
              <SkeletonText />
            </SkeletonWrapper>
            <SkeletonWrapper width='30%'>
              <SkeletonIcon>
              </SkeletonIcon>
              <SkeletonSubtitle />
              <SkeletonText />
              <SkeletonText />
            </SkeletonWrapper>
            
          </Wrapper>
      : <Weather location={location} ready={ready}/> 
      : <Wrapper><h1>{error.message}</h1></Wrapper>

      }
    </>
    

  );
}

export default App;
