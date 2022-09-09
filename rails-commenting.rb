# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the class controller for the Table BlogPost it also is the start of the index method.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # The @posts instance variable when called on will show all they instances of BlogPost in the table
    @posts = BlogPost.all
  end

  # ---3)
  # This @post instance variable makes it so that it shows a particular instance in the table.  For example if the URL looked like this: localhost:3000/blogposts/2.  It would show the instance that has the primary key 2.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This  instance varialbe makes it so the @post creates a new instance for BlogPost table but this method works in tandem with create.  The new method works with an html form to take in the data on the page so that create knows what to add to the new instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The purpose of this method is to make a new blog post. assigning the instance varialbe the rails console methodto create one makes it easier to access and also you have an if else statement checking if its valid by checking the strong params you have declared farther down in the code. where if its valid go to the post. If it is not to go back to the create new post page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # This method is really just finding the exact blog post you want to edit by using the instance variable to equal to finding a certain instance in the table just like in the show method. Update works in tandam with edit so it also uses the method to find the exact instance you are trying to find to edit and update. Edit uses a HTML form so you can type in what you want to edit and or update on the page so that when the update method is ran it takes what you typed and updates the instance you have selected.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This instance varialbe is updating the specific instance that we define and letting you change the params of an already existing item in the table.  It is also checking to see that the new data you are entering is valid and follows the strong params. 
    # the destroy method is pretty straight forward.  The instance variable is looking for the specific item that you want to destroy.  After running the method destroy it is saying if you did destroy it return back to all the blog posts, if not stay on the post you looked for.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # You are crating a private method which means it can only be used within this class definition. You are saying that the method blog_post_params is private and only lives inside this class defintion.
  private
  def blog_post_params
    # ---10)
    # This is adding a security requiring that when you create params it has to be within the blog_post table and that it will only permit the :title and :content arguements and only take in the datatypes that where defined when the model was made.
    params.require(:blog_post).permit(:title, :content)
  end
end
