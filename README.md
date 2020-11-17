# RULES
Pantry Pals is intended to help making shopping for large groups, or small, easier. 

# ROUTES 
  The routes should be based on the individual currently logged in. The title of the role may change, but interactions are based on current user. 

# DEFAULTS 
When a user is first created, pal's list, pantry and shopping list should be empty.

All pals will default as having a requester role.
All requests must be approved by shopping list owner.

  # DISPLAYS DEFAULTS - All users can see from profile page  
  SEEN: Username, email, DOB date, DOB month, 
  UNSEEN: likes, dislikes, diets, allergies, city, state, country, DOB year

# ROLES
MOU - Master of the Universe, admin role, developer mode, has all permissions. 
OWNER - the person who original created the list you are working off of. 
CO-OWNER - someone who has made a merge request on your lists and the request has been approved. Has all the same permissions as a list owner. 
EDITOR - has the ability to add and remove items from all lists. 
REQUESTER - has the ability to request items from the shopping list. It able to remove items from the pantry, but not add add. 

__list roles:
  roles are assigned by pantry and shopping list. 
    EX: You can be an editor for the shopping list, but not the pantry.

__all roles:
  can go shopping, meaning can mark item off on the shopping list 

__Only Owners 
  Can change the Pal's list name

__Owner and Co-owner
  Can change the name of pantry and shopping list 


# ADDING PALS
  Steps
    1. Send request
    2. request approve or declined 
      3. if approved, add user to requestors list and new pal's list. 
      4. default all role set to requester on new pal for lists. 

# MERGING

__how to do merges work
  Merge appears on the Pal's list. If a person does not appear on the Pal's list a merge cannot occur. 

  Steps 
    1. The requests, (list OWNERS), send a request to a friend. 
    2. The request appear in the Pal's inbox. 
      3. If approved, the Pal becomes an CO-OWNER. 
        a. The Pal's lists content is copied into the OWNER's lists 
        b. The Pal's lists are deactivated - the Pal will view all list by Pal's list. 

__how to merges work when the person requesting the merge doesn't appear on the owner or co-owners pal's list? 

  If a list is currently merged and the individual requesting the merge does not appear on both the OWNER's and CO-OWNER's Pal's list, the merge request will be declined. 
    A message should appear to the requesters stating the must be added to either the OWNER's or CO-OWNER's list before they will be able to work merge.  

__blocking OR unfriending 
  If you currently have merged lists and unfriend or block someone, a new pantry and shopping list should be created for the non-owner based on the last state of the list and pantry 


# API
Get request comes from: "https://api.spoonacular.com/recipes/complexSearch" 

svg icons to use: 
pantry merge request: <i class="fas fa-door-open"></i> 
shopping list merge request: <i class="fas fa-exchange-alt"></i> ? 
sync: <i class="fas fa-thumbtack"></i> v
block user: <i class="fas fa-ban"></i>  or <i class="fas fa-user-slash"></i>
removed friend: <i class="fas fa-house-damage"></i>  
birthday: <i class="fas fa-birthday-cake"></i> 
allergies: <i class="fas fa-allergies"></i>
  deadly: <i class="far fa-dizzy"></i> or <i class="fas fa-skull-crossbones"></i> 
shopping: <i class="fas fa-cart-arrow-down"></i> or 
settings list and pantry : <i class="fab fa-whmcs"></i> 
user settings: <i class="fas fa-users-cog"></i> 
remove: <i class="fas fa-trash-alt"></i> 
reject: <i class="fas fa-thumbs-down"></i> 
approve: <i class="fas fa-thumbs-up"></i> 
favorites: <i class="far fa-star"></i> 
dislike: <i class="fas fa-poop"></i> 
save: <i class="far fa-save"></i> 
send request: <i class="far fa-paper-plane"></i> 
list owner: <i class="fas fa-house-user"></i> ? <i class="fas fa-hat-wizard"></i> 

future use? 
recipes: <i class="fas fa-book"></i> 
beer: <i class="fas fa-beer"></i>
wine: <i class="fas fa-wine-bottle"></i> or <i class="fas fa-wine-glass-alt"></i> 
barcode: <i class="fas fa-barcode"></i> 
bread: <i class="fas fa-bread-slice"></i> 
kids: <i class="fas fa-child"></i> 
costs: <i class="fas fa-dollar-sign"></i> or <i class="fas fa-wallet"></i> 
chat: <i class="fab fa-weixin"></i> 
save for later: <i class="fas fa-thumbtack"></i> 
donate: <i class="fas fa-parachute-box"></i> 