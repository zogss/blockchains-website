class MainController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async index(req, res) {
    //* render view
    return res.render("pages/home");
  }
}

export default new MainController();
