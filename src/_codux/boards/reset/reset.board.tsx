import { createBoard } from '@wixc3/react-board';
import Reset from '../../../components/reset';

export default createBoard({
    name: 'Reset',
    Board: () => <Reset />,
    isSnippet: true,
});
