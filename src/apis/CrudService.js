import axios from 'axios';
import { GNEWS_API_URL,GNEWS_API_TOKEN, WORD_TO_SEARCH} from '../Constants';
class CrudServices{
    getExternalNews=(search=WORD_TO_SEARCH)=>{
        return axios.get(`${GNEWS_API_URL}/search?q=${search}&token=${GNEWS_API_TOKEN}`);
    }
    saveLocalPost=(posts)=>{
        localStorage.setItem("localPosts",JSON.stringify(posts));
    }
    getPosts=()=>{
        let objToReturn= JSON.parse(localStorage.getItem("localPosts"));
        if (objToReturn===null)return [];
        return objToReturn;
    }
    addLocalPost=(postObj)=>{
        let localPosts=this.getPosts();
        localPosts.unshift(postObj);
        this.saveLocalPost(localPosts);
        return true;
    }
    deleteLocalPost=(postId)=>{
        let localPosts=this.getPosts();
        let updatedPosts=localPosts.filter(row=>{return !(row.id.toString()===postId.toString());});
        this.saveLocalPost(updatedPosts);
        return true;
    }
    modifyLocalPost=(postId,newObj)=>{
        let localPosts=this.getPosts();
        let updatedPost=localPosts.map(row=>{
            if(row.id.toString()===postId.toString())return newObj;
            return row;
        });
        this.saveLocalPost(updatedPost);
        return true;
    }
}
export default new CrudServices();