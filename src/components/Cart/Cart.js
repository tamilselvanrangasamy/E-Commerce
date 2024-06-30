import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from "./CartTotals";
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

export default class Store extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
                <Link to='/products'>
                <ButtonContainer>
                    <i className='fas fa-home'>Products</i>
                </ButtonContainer>
                </Link>
            </section>
        );
    }
}
