/* Step 7. Now lets create our protected endpoint.

  In the this_file function, we need to check `context` for `clientContext.user`

  The `context` parameter of a function contains information about where the function is running and a bunch of other information that is useful like auth info.

  When you run functions inside Netlify and enable Netlify identity, authorization is streamlined.

  The `context.clientContext.user` data contains the claims of the user.
*/
exports.handler = async (event, context) => {
  /* Reading the context.clientContext will give us the current user */
  const claims = context.clientContext && context.clientContext.user
  console.log('User claims', claims)
  if (!claims) {
    console.log('No claims! Begone!')
    return {
      statusCode: 401,
      body: JSON.stringify({
        data: 'NOT ALLOWED'
      })
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Super secret`,
    })
  }
}
