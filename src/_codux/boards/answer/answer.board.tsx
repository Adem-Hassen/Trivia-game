import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'Answer',
    Board: () => <Answer text="qdqqd" color="red" />,
    isSnippet: true,
});
