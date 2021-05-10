import React, { Component } from 'react';
import CrudService from '../apis/CrudService';
import ArticleCard from './common/ArticleCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './common/Spinner';

class ExternalPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPosts: false,
            articles: [],
            showSpinner:false
        };
    }
    componentDidMount(){
        this.initPosts();
    }
    initPosts=()=>{
        this.setState({
            showSpinner:true
        },()=>{
            CrudService.getExternalNews().then(result => {
                this.setState({ showSpinner:false,showPosts: true, articles: result.data.articles });
            }, error => {
                alert("Error occured... Please review API KEY");
            });
        });

    }
    render() {
        return (
            <React.Fragment>
                {this.state.showSpinner&&
                <Spinner />}
                {this.state.showPosts &&
                    this.state.articles.map(record =>
                        <ArticleCard record={record} allowEdition={false} style={{ zIndex: 2 }} />
                    )
                }
            </React.Fragment>
        );
    }
}
export default ExternalPost;