import { CardList } from "./CardsContext/CardsContext"

export const Context = ({children}) => {
	return <CardList>
		{children}
	</CardList>
}