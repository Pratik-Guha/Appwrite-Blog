import config from "../config/config.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createPost({ title, slug, content, faturedimage, status, userid }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    faturedimage, // Corrected attribute name
                    status,
                    userid,
                }
            );
        } catch (error) {
            console.log("Appwrite services :: createPost :: error", error);
        }
    }
    
    
    
    async updatePost(slug,{title,content,faturedimage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {   title,
                    content,
                    faturedimage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite services :: updatePost :: error",error);
            
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite services :: deletePost :: error",error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
          
        } catch (error) {
            console.log("Appwrite services :: getPost :: error",error);
            return false;
        }
    }
    async getPosts(qureies=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                qureies,
            )
        } catch (error) {
            console.log("Appwrite services :: getPosts :: error",error);
            return false;
        }
    }


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("Appwrite services :: uploadFile :: error",error);
            return false;
        }
    }
    async deleteFile(fileID){
        // filed ID must be cehck
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error",error);
            return false;
        }
    }
    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileID
        )
    }
    
}

const service=new Service()
export default service;