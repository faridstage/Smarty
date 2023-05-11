using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specification
{
    public class MarksWithTypesAndBrandsSpecification : BaseSpecification<Mark>
    {
        public MarksWithTypesAndBrandsSpecification()
        {
            AddInclude(x => x.MarkBrand);
            AddInclude(x => x.MarkType);
        }

        public MarksWithTypesAndBrandsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.MarkBrand);
            AddInclude(x => x.MarkType);
        }
    }
}