*!*  Need to launch apiKey host server prior to launching 

   shell into '/pages/api/keyvault' 
      -- npm run dev 
   whatever ip/port chosen, update .env.local in /defiswap


*!* To build apikeyvault: 

## Step-1 Create the Key Vault Server in Next JS

```shell
npx create-next-app keyvault
```
## Step-2 Add the keyvault.js file under /pages/api/

add the file keyvault.js located in this repo to /pages/api/

Update the file with your own values:

```shell
      apikey: "ENTER YOUR API KEY",
```

Save file.

Go to your project folder and start the server:

```shell
      cd keyvault
      npm run dev
```
whatever ip/port chosen, update .env.local in /defiswap

*!* To do: 

check to see if keyvault needs to be external of 0xswap for security

Lots of 'localhost' to replace everywhere (so many, double check all the image calls)

cleanup images and references from n2dev

add other 0x supported tokens 

