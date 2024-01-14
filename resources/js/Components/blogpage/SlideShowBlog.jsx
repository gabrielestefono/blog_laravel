import BannerBlog from './BannerBlog';
import PageTitle from './PageTitle';
import propTypes from 'prop-types';

export default function SlideShowBlog({light, post}) {
    SlideShowBlog.propTypes = {
        light: propTypes.bool,
        post: propTypes.object
    }
    return (
        <>
            <PageTitle light={light}/>
            <BannerBlog light={light} post={post}/>
        </>
    )
}
