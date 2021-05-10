import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Base64Image from './common/Base64Image';
import CrudService from '../apis/CrudService';
import { v4 as uuidv4 } from "uuid";
import ArticleCard from './common/ArticleCard';

/* 
Author: Juan Pablo Paredes
Class: LocalPosts
   This class was created to assemble all local posts in the page. This is using the same component to show Posts in the same format like external posts section.
   Is important to note that the page allows to manage CRUD behavior. 
*/
class LocalPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showPosts: false,
            image: null,
            title: null,
            content: null,
            articles: [],
            id: null
        };

    }
    componentDidMount() {
        this.initPosts();
    }
    handleShowModal = () => {
        this.setState({ showModal: true });
    }
    handleCloseModal = () => {
        this.setState({ showModal: false });
    }
    getFiles = (file) => {
        this.setState({ image: file.base64 });
    }
    onChangeText = (e) => {
        let toModify = {};
        toModify[e.target.name] = e.target.value;
        this.setState(toModify);
    }
    /* 
    Author: Juan Pablo Paredes
    Method: savePost
       This method is used to update or delete posts from localStorage. Everything is managed from the same point. 
    */
    savePost = () => {
        let objToSave = {
            image: this.state.image,
            content: this.state.content,
            title: this.state.title
        };
        if (this.state.id === null) {
            objToSave["id"] = uuidv4();
            CrudService.addLocalPost(objToSave);
        }
        else{
            objToSave["id"] = this.state.id;
            CrudService.modifyLocalPost(this.state.id, objToSave);
            this.setState({currentId:null});
        }
        this.handleCloseModal();
        this.initPosts();
    }
    removePost = (postId) => {
        CrudService.deleteLocalPost(postId);
        this.initPosts();
    }
    updatePost = (postId, record) => {
        this.setState({
            id:postId,
            title:record.title,
            content:record.content,
            image:record.image
        },()=>{
            this.handleShowModal();
        });
    }
    initPosts = () => {
        this.setState({ showPosts: false }, () => {
            let articles = CrudService.getPosts();
            this.setState({ showPosts: true, articles });
        });
    }
    /* 
    Author: Juan Pablo Paredes
    Method: createPostBtn
       Method used to open ModalDialog and manage articles addition.
    */
    createPostBtn=()=>{
        this.setState({
            currentId:null,
            title:null,
            content:null,
            image:null
        },()=>{
            this.handleShowModal();
        });
    }
    render() {
        return (
            <React.Fragment>
                <Button variant="secondary" onClick={this.createPostBtn} >
                    Create a New Post
                 </Button>
                <filePlus />
                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header>
                        <Modal.Title>Post Edition</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="controlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={this.state.title} name="title" type="text" onChange={this.onChangeText} />
                            </Form.Group>
                            <Form.Group controlId="controlInput2">
                                <Form.Label>Content</Form.Label>
                                <Form.Control value={this.state.content} name="content" as="textarea" rows={3}  onChange={this.onChangeText} />
                            </Form.Group>
                            <Form.Group controlId="controlInput3">
                                <Form.Label>Image</Form.Label> <br />
                                <Base64Image onDone={this.getFiles} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={this.savePost}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                {this.state.showPosts &&
                    this.state.articles.map(record =>
                        <ArticleCard record={record} allowEdition={true} style={{ zIndex: 2 }}
                            removePost={this.removePost} updatePost={this.updatePost} />
                    )
                }
            </React.Fragment>
        );
    }
}
export default LocalPosts;
