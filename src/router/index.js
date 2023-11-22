import { createBrowserRouter } from'react-router-dom';
import App from '../App';
import Body from '../components/Body';
import VideoPlayer from '../components/VideoPlayer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/watch',
                element: <VideoPlayer />
            }
        ]
    },

])

export default router;