using Microsoft.AspNetCore.Mvc;

namespace FernsPetals.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
