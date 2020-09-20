import Images from '../../../resources/beautypage/images/index';

// we can't use require(imageName)
export const getImageFromResources = (category, imageName) => {
    if (category === 'blog') {
        switch (imageName) {
            case 'poly1':
                return Images.blog.poly1;
            case 'poly2':
                return Images.blog.poly2;
        }
    } else if (category === 'people') {
        switch (imageName) {
            case 'avatar1':
                return Images.people.avatar1;
        }
    }

    return null;
}