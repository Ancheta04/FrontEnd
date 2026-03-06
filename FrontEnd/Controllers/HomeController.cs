using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontEnd.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return RedirectToAction("Login");
        }

        // Login page
        public ActionResult Login()
        {
            return View();
        }

        // Dashboard page
        public ActionResult Dashboard()
        {
            return View();
        }

        // Department page
        public ActionResult DepartmentPage()
        {
            return View();
        }

        // Attendance page - handles /Home/Attendance
        public ActionResult Attendance()
        {
            return View("AttendancePage"); // Points to AttendancePage.cshtml
        }

        // Keep this for backward compatibility
        public ActionResult AttendancePage()
        {
            return View();
        }

        // About page
        public ActionResult About()
        {
            return View();
        }

        // Contact page
        public ActionResult Contact()
        {
            return View();
        }
    }
}