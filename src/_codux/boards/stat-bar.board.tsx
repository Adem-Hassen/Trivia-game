import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'StatBar',
    Board: () => <div></div>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024
    }
});
