using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.Test
{
    public class Subject : BaseEntity
    {
        public string Name { get; set; }
        public List<Question> Questions { get; set; }
    }
}