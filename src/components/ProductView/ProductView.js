// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import {getProductsError, getProducts, getProductsPending} from './../../services/redux/reducers';

// // import LoadingSpinner from './SomeLoadingSpinner';
// // import ProductList from './ProductList';

// class ProductView extends Component {
//     constructor(props) {
//         super(props);

//         this.shouldComponentRender = this.shouldComponentRender.bind(this);
//     }

//     componentWillMount() {
//         const {fetchProducts} = this.props;
//         fetchProducts();
//     }
//     componentDidMount = () => {
//         // console.log(props)
//     }

//     shouldComponentRender() {
//         const {pending} = this.props;
//         if(this.pending === false) return false;
//         // more tests
//         return true;
//     }

//     // render() {
//     //     const {products, error, pending} = this.props;

//     //     // if(!this.shouldComponentRender()) return <LoadingSpinner />

//     //     return (
//     //         <div className='product-list-wrapper'>
//     //             {error && <span className='product-list-error'>{error}</span>}
//     //             <ProductList products={products} />
//     //         </div>
//     //     )
//     // }
// }


// const mapStateToProps = state => ({
//     error: getProductsError(state),
//     products: getProducts(state),
//     pending: getProductsPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchProducts: fetchProductsAction
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductView );
