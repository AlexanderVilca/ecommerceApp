// Product queries

export const ALL_PRODUCTS_QUERY = `
    *[_type == "product" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        slug,
        description,
        price,
        discountedPrice,
        images,
        brand->{
            _id,
            name
        },
        categories[]->{
            _id,
            name,
            slug
        },
        ratings,
        stock,
        status
    }
`;

export const FEATURED_PRODUCTS_QUERY = `
    *[_type == "product" && isFeatured == true && !(_id in path("drafts.**"))] | order(_createdAt desc) [0...10] {
        _id,
        _createdAt,
        name,
        slug,
        description,
        price,
        discountedPrice,
        images,
        brand->{
            _id,
            name
        },
        categories[]->{
            _id,
            name,
            slug
        },
        ratings,
        stock,
        status  
    }
`;

export const DEAL_PRODUCTS_QUERY = `
    *[_type == "product" && discount > 0 && !(_id in path("drafts.**"))] | order(discount desc) [0...10] {
        _id,
        _createdAt,
        name,
        slug,
        description,
        price,
        discountedPrice,
        discount,
        images,
        brand->{
            _id,
            name
        },
        categories[]->{
            _id,
            name,
            slug
        },
        ratings,
        stock,
        status
    }
`;

export const CATEGORIES_QUERY = `
    *[_type == "category" && !(_id in path("drafts.**"))] | order(title asc) {
        _id,
        "name": title,
        title,
        slug,
        description,
        image
    }
`;

export const PRODUCT_BY_SLUG_QUERY = `
    *[_type == "product" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    
        ...,
        "averageRating": math::avg(*[_type == "review" && product._ref == ^._id && status == "approved"].rating),
        "totalReviews": count(*[_type == "review" && product._ref == ^._id && status == "approved"]),
        brand->{
            _id,
            title,
            slug
        },
        categories[]->{
            _id,
            title,
            slug
        },
        "weights": select(
            useAllWeights == true => *[_type == "productWeight" && isActive == true] | order(weight asc) {
                _id,
                name,
                value,
                unit,
                numericValue,
                isActive
            },
            weights[]->{
                _id,
                name,
                value,
                unit,
                numericValue,
                isActive
            }
        ),
        "sizes": select(
            useAllSizes == true => *[_type == "productSize" && isActive == true] | order(weight asc) {
                _id,
                value,
                isActive
            },
            sizes[]->{
                _id,
                value,
                isActive
            }
        ),
        "colors": select(
            useAllColors == true => *[_type == "productColor" && isActive == true] | order(weight asc) {
                _id,
                name,
                "value": hexCode,
                isActive
            }
        )
    }
`;

export const CATEGORY_BY_SLUG_QUERY = `
    *[_type == "category" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        _id,
        title,
        slug,
        description,
        image,
        "products": *[_type == "product" && references(^._id) && !(_id in path("drafts.**"))] {
            _id,
            _createdAt,
            name,
            slug,
            description,
            price,
            discountedPrice,
            discount,
            images,
            brand->{
                _id,
                name
            },
            ratings,
            stock,
            status
        }
    }
`;

export const BANNERS_QUERY = `
    *[_type == "banner" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id,
        image,
        title,
        buttonTitle,
        buttonHref
    }
`;

export const BRANDS_QUERY = `
    *[_type == "brand" && !(_id in path("drafts.**"))] | order(title asc) [0...10] {
        _id,
        title,
        slug,
        image,
        description
    }
`;

export const ACTIVE_COUPONS_QUERY = `
    *[_type == "coupon" && isActive == true && !(_id in path("drafts.**"))] | order(discountValue desc) [0...5] {
        _id,
        code,
        title,
        description,
        discountType,
        discountValue,
        minPurchase,
        expiresAt,
        isActive
    }
`;

export const PRODUCTS_BY_CATEGORY_QUERY = `
    *[_type == "products" && $categoryId in categories[]._ref && !(_id in path("drafts.**"))] | order(_createdAt desc) [0...10] {
        _id,
        _createdAt,
        name,
        slug,
        description,
        price,
        discountedPrice,
        discount,
        images,
        "averageRating": math::avg(*[_type == "review" && product._ref == ^._id && status == "approved"].rating),
        brand->{
            _id,
            title
        },
        categories[]->{
            _id,
            title,
            slug
        },
        ratings,
        stock,
        status
    }
`;

export const ALL_PRODUCTS_PAGINATED_QUERY = `
    *[_type == "product" && !(_id in path("drafts.**"))] ! order(_createdAt desc) [$start...$end] {
        _id,
        _createdAt,
        name,
        slug,
        description,
        price,
        discountedPrice,
        discount,
        images,
        "averageRating": math::avg(*[_type == "review" && product._ref == ^._id && status == "approved"].rating),
        brand->{
            _id,
            title
        },
        categories[]->{
            _id,
            title,
            slug
        },
        ratings,
        stock,
        status
    }
`;

export const COUNT_ALL_PRODUCTS_QUERY = `
    count(*[_type == "product" && !(_id in path("drafts.**"))])
`;
