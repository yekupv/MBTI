import { Analysts, Diplomats, Sentinels, Explorers } from "../assets";

export function getCardbyCode(code1, code2) {
	const cards = [...Analysts, ...Diplomats, ...Sentinels, ...Explorers];
	const color = cards.filter((card) => card.MBTICode === code1);
	const music = cards.filter((card) => card.MBTICode === code2);

	if (color[0].id === music[0].id) return color;
	return [...color, ...music];
}
export function getCardTitlebyId(id) {
	const cards = [...Analysts, ...Diplomats, ...Sentinels, ...Explorers];
	const card = cards.filter((card) => {
		return card.id == id;
	})[0];
	const title = card.MBTICode;
	return title;
}
