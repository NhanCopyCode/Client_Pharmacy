    import {fetchHeaderDataFail, fetchHeaderDataStart, fetchHeaderDataSuccess} from './headerDataSlice'
    import homeService from '../services/HomeService'

    export const fetchHeaderData = () => async (dispatch) => {
        try {
            dispatch(fetchHeaderDataStart());
            const res = await homeService.getHeaderFooterApi();
            dispatch(fetchHeaderDataSuccess({
                bannersTop: res.data.banners_top,
                categories: res.data.categories,
                postCategory: res.data.post_category,
                postsHeader: res.data.posts_header,
            }));
        } catch (error) {
            dispatch(fetchHeaderDataFail(error.message));
        }
    }