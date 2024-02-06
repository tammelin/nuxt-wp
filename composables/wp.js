import WPAPI from 'wpapi';

export const useWp = () => {
    
    const runtimeConfig = useRuntimeConfig()
    
    var wp = new WPAPI({ endpoint: runtimeConfig.public.wpJsonUrl });

    const getPosts = async () => {
        return wp.posts().get(function( err, data ) {
            if ( err ) {
                console.error( err );
                return false;
            }
            return data;
        });
    }

    const getPostBySlug = async (slug) => {
        return wp.posts().slug(slug).get(function( err, data ) {
            if ( err ) {
                console.error( err );
                return false;
            }
            let post = data[0]
            return post
        });
    }
    
    return { getPosts, getPostBySlug }
}