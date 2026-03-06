using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Attendance.Models
{
    public class Students
    {

        public string Id { get; set; }
        public string username { get; set; }
        public string password { get; set; }

        internal static void Add(Students students)
        {
            throw new NotImplementedException();
        }
    }
}

