import React from "react";
import { createContext, useContext } from "react";

const NavContext = createContext();

export function NavStateWrapper({ children }) {
	const [route, setRoute] = React.useState("/rates");
	return (
		<NavContext.Provider value={[route, setRoute]}>
			{children}
		</NavContext.Provider>
	);
}

export function useNavState() {
	return useContext(NavContext);
}
