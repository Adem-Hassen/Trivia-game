import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar cuurentQuestion={1} totalQuestions={10} correct={1} incorrect={5} />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 118
    }
});
