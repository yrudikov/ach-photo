import { writable } from 'svelte/store';



function createScreenStore() {
	const { subscribe, set } = writable({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		isTablet: false,
		isDesktop: false
	});

	function updateScreen() {
		const width = window.innerWidth;
		set({
			width,
			isTablet: width >= 767,
			isDesktop: width >= 1024
		});
	}

	updateScreen();

	window.addEventListener('resize', updateScreen);

	return {
		subscribe,
		cleanup: () => window.removeEventListener('resize', updateScreen)
	};
}

export const screen = createScreenStore();
