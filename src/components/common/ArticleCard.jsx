import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../common/css/style.css';

class ArticleCard extends Component {
    constructor(props) {
        super(props);
    }
    removePost = () => {
        this.props.removePost(this.props.record.id);
    }
    updatePost = () => {
        this.props.updatePost(this.props.record.id, this.props.record);
    }
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Card>
                            <Card.Img variant="top" src={this.props.record.image} />
                            <Card.Body>
                                <Card.Title>{this.props.record.title}</Card.Title>
                                <Card.Text>
                                    {this.props.record.content}
                                </Card.Text>
                                {this.props.allowEdition &&
                                    <React.Fragment>
                                        <Link className="postLinks" onClick={this.updatePost}>Edit</Link>
                                        <Link className="postLinks" onClick={this.removePost}>Delete</Link>
                                    </React.Fragment>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default ArticleCard;