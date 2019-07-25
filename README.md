# Use My Tech Stuff  
![Lambda Academy ](https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png)
## Summary
Like AirBnB but for high end electronics. Tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person! MVP:   They can then set up items they have for rent such as cameras, TVs, Party equipment like speakers/fog machines etc. Users will be able to Create, Read, Update and Delete rental data. A 2nd user can log in and see items that users have for rent and ask to rent an item. No payment processing necessary for MVP. Stretch: Add a payment option into the application allowing people to pay over paypal/stripe etc. to rent their items, schedule time and place for pick up etc.

### Usage
### https://usemytechstuff.herokuapp.com/

### Prerequisites (for local use)
- run `yarn` in order to install all dependencies

### To run, navigate to use-my-tech-stuff2/src and run 
    `yarn start`

## Main Menu Options

- `Login` Displays login modal
- `Join Use My tech Stuff` Displays modal to register a new user
- `Techies` Displays page of registered users
- `Logout` Takes user back to main page

#### Default logins established
         username: pt-test
         password: pw 

         username: techieTecherson
         password: pw

         username: TechieBoy
         password: pw

## Conditionally rendered content

- If you are `owner` of the Tech Item, you are given the options:

    `Delete Item`:   will remove item permanently!
    
    `Update Item`:    updates any of the available fields:
    - name
    - category
    - cost
    - picture
    - URL
    - description

- If you are `NOT the owner` of the Tech Item, you are given only one option
    - Rent Me - displays Modal showing Tech Item name & owner of  Tech Item. 
    - Confirming allows user to Confirm item to be rented

## Endpoints

| Method | Endpoint               | Requires                        | Description                                                             |
| ------ | ---------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/api/auth/register/`  | `username`, `password`, `email` | Used for adding a new user to database.                                 |
| POST   | `/api/auth/login/`     | `username`, `password`          | Used to log a user in. Returns a token and the user's name in its body. |
| GET    | `/api/users`           | Successful Login                | Used to show all users in the database.                                 |
| GET    | `/api/users/:id/`      | Successful Login                | Used to show a specific user in the database.                           |
| GET    | `/api/tech`            | Successful Login                | Used to show tech in the database.                                      |
| GET    | `/api/tech/:id/`       | Successful Login                | Used to show a specific piece of tech in the database.                  |
| POST   | `/api/tech/`           | Successful Login, Data          | Used to post a new piece of tech to the database.                       |
| PUT    | `/api/tech/:id`        | Successful Login, Data          | Used to edit the logged in user's tech.                                 |
| POST   | `/api/tech/:id`        | Successful Login, Data          | Used to post a comment on the specific piece of tech.                   |
| DELETE | `/api/tech/:id/`       | Successful Login                | Used to delete the logged in user's tech.                               |
| POST   | `/api/tech/img/upload` | Successful Login, Data          | Used to upload images to the database.                                  |

---

### User Registration

Method used: **[POST]** `/api/auth/register/`

On Success: Returns the the new user.

Parameters:

| Name     | Type   | Required | Notes                                  |
| -------- | ------ | -------- | -------------------------------------- |
| username | string | yes      | Must be unique.                        |
| password | string | yes      | Can be up to 128 characters in length. |
| email    | string | yes      | The email the user wishes to use.      |

Example of what to use:

```
{
    username: "Lambda",
    password: "testpassword",
    email: "lambda@lambda.com"
}
```

---

### User Login

Method used: **[POST]** `/api/auth/login/`

On Success:
Returns a token to be used to authenticate the user, the user id, and the username.

Parameters:

| Name     | Type   | Required |
| -------- | ------ | -------- |
| username | string | yes      |
| password | string | yes      |

Example of what to use:

```
{
    username: "Lambda",
    password: "testpassword"
}
```

---

### Get List of all Tech

Method used: **[GET]** `/api/tech/`

On Success: Returns an array of all tech in database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Get a specific piece of Tech.

Method used: **[GET]** `/api/tech/:id/`

On Success: Returns a specific piece of tech in the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Post Tech

Method used: **[POST]** `/api/tech/`

On Success: Adds a new tab to the database.

Parameters:

| Name          | Type       | Required | Notes                                                    |
| ------------- | ---------- | -------- | -------------------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.                        |
| name          | string     | yes      | The name of the website being saved.                     |
| user_id       | string     | yes      | The address of the tech being saved.                     |
| category      | text       | yes      | The category the tech will be saved under.               |
| picture       | string     | yes      | The image url to display the tech being saved.           |
| cost          | string     | yes      | The cost of the tech being saved.                        |
| availability  | string     | yes      | Whether or not the tech being saved is available to rent |
| description   | text       | yes      | A description of the tech being saved.                   |

---

### Update Tech

Method used: **[PUT]** `api/tech/:id/`

On Success: Returns updated array.

Parameters:

| Name          | Type       | Required | Notes                                                    |
| ------------- | ---------- | -------- | -------------------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.                        |
| name          | string     | no       | The name of the website being saved.                     |
| category      | text       | no       | The category the tech will be saved under.               |
| picture       | string     | no       | The image url to display the tech being saved.           |
| cost          | string     | no       | The cost of the tech being saved.                        |
| availability  | string     | no       | Whether or not the tech being saved is available to rent |
| description   | text       | no       | A description of the tech being saved.                   |

---

### Post Comment

Method used: **[POST]** `api/tech/:id/`

On Success: Returns updated array.

Parameters:

| Name          | Type       | Required | Notes                                        |
| ------------- | ---------- | -------- | -------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.            |
| content       | string     | yes      | The content of the post being saved.         |
| user_id       | text       | yes      | The id of the user making the comment.       |
| tech_id       | string     | yes      | The id of the tech the comment is made on.   |
| Date          | string     | no       | The date the comment being saved was posted. |

---

### Delete Tech

Method used: **[DELETE]** `/api/tech/:id`

On Success: Deletes the tech from the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Upload Image

Method used: **[POST]** `/api/tech/img/upload`

On Success: Deletes the tech from the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |
| image         | form       | yes      | An image for a user or tech.      |

---

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.

---

### Get Specific User

Method used: **[GET]** `/api/users/:id/`

On Success: Returns a specific user.

---

```

```